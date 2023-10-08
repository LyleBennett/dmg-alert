<?php

/**
 * DMG Alert CLI
 * 
 */

class DMG_ALERT_CLI
{

    /**
     * Search for posts containing the DMG Alert block, defaulting to the last 30 days (including today).
     *
     * ## OPTIONS
     *
     * [--date-before=<date>]
     * : Date to search before
     *
     * [--date-after=<date>]
     * : Date to search after
     *
     * ## EXAMPLES
     *
     *     wp dmg-alert search --date-before=2020-01-01 --date-after=2020-01-01
     *
     */
    public function search($args, $assoc_args)
    {
        try {
            // Default to last 30 days
            // default date before should be end of today (therefore: 'tomorrow' as the time would be 00:00:00, so will include all of today)
            $date_before = isset($assoc_args['date-before']) ? $assoc_args['date-before'] : date('Y-m-d', strtotime('tomorrow'));
            $date_after = isset($assoc_args['date-after']) ? $assoc_args['date-after'] : date('Y-m-d', strtotime('-30 days'));

            // Validate dates
            if (!strtotime($date_before)) {
                WP_CLI::error('Invalid date-before argument.');
            }

            if (!strtotime($date_after)) {
                WP_CLI::error('Invalid date-after argument.');
            }



            $args = array(
                'post_type' => 'post',
                'paged' => 1,
                'posts_per_page' => 10000, // set this as high as possible while avoiding memory issues
                'date_query' => array(
                    'before' => $date_before,
                    'after' => $date_after,
                ),
                's' => '<!-- wp:dmg/alert',
                'fields' => 'ids',
                'cache_results' => false,
                'update_post_meta_cache' => false,
                'update_post_term_cache' => false,
                'no_found_rows' => true
            );

            while (true) {
                $query = new WP_Query($args);

                // break if no posts found
                if (empty($query->posts)) {
                    if ($args['paged'] == 1) {
                        WP_CLI::log('No posts found.');
                    }
                    break;
                }

                foreach ($query->posts as $post) {
                    WP_CLI::log($post);
                }

                // increment page
                $args['paged']++;
            }


            WP_CLI::success('Search complete.');
        } catch (Exception $e) {
            WP_CLI::error($e->getMessage());
        }
    }
}

WP_CLI::add_command('dmg-alert', 'DMG_ALERT_CLI');
