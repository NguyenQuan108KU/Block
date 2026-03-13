using System.Collections;
using System.Collections.Generic;
using UnityEngine;
// ReSharper disable InconsistentNaming

public enum RemoteConfigKey
{
    start_level_show_interstitial = 0,
    interstitial_time_gap = 1,
    display_list_view_ads = 2,
    level_show_cross_app = 3,
    app_sku_ignore_list = 4,
    cross_app_data = 5,
    replace_level = 6, // not use, RemoteConfigDatabaseKey.level_database instead
    show_banner_enable = 7,
    seconds_to_dispose_ads = 8,
    use_open_ads_as_interstitial = 9,
    mediation_platform = 10,
    load_native_ads = 11,
    force_disable_test_ads = 12,
    start_level_show_banner = 13,
    start_level_have_event = 14, 
    difficulty = 15,
    level_show_no_ads_pack = 16,
    level_da_difficulty_separate = 17,
    enable_da_difficulty_separate = 18,
    start_level_show_offer = 19,
    
    admob_inter_ad_id = 20,
    admob_banner_ad_id = 21,
    admob_native_banner_ad_id = 22,
    admob_rewarded_ad_id = 23,
    admob_open_ad_id = 24,
    
    max_inter_ad_id = 30,
    max_banner_ad_id = 31,
    max_native_banner_ad_id = 32,
    max_rewarded_ad_id = 33,
    max_open_ad_id = 34,
    
    no_banner = 50,

    policy_url = 100,
    more_game_url = 101,
    fan_page_url = 102,
    notifications = 103,
    notify_day_title= 104,
    notify_day_content = 105,
    notify_week_title = 106,
    notify_week_content = 107,
    game_play_level_log = 108,
    game_play_level_pass_to_rate = 109,
    undo_default = 110,
    remote_enable = 111,
    internet_connection = 112,
    internet_connection_level = 113,
    gdpr_reset = 114,
    gdpr_ignore = 115,
    gdpr_force = 116,
    start_gdpr_date = 117,

    enabled_pam = 149,
    by_level_condition_interstitial_time_gap = 150,
    
    by_level_condition_admob_banner_id = 151,
    by_level_condition_admob_interstitial_id = 152,
    by_level_condition_admob_rewarded_id = 153,
    by_level_condition_admob_open_id = 154,
    by_level_condition_admob_native_id = 155,
    //
    by_level_condition_max_banner_id = 160,
    by_level_condition_max_interstitial_id = 161,
    by_level_condition_max_rewarded_id = 162,
    by_level_condition_max_open_id = 163,
    by_level_condition_max_native_id= 164,
    
    pam_admob_banner_id = 171,
    pam_admob_interstitial_id = 172,
    pam_admob_rewarded_id = 173,
    pam_admob_open_id = 174,
    pam_admob_native_id = 175,
    //
    pam_max_banner_id = 180,
    pam_max_interstitial_id = 181,
    pam_max_rewarded_id = 182,
    pam_max_open_id = 183,
    pam_max_native_id= 184,
    
    
    default_skin = 250,
    start_level_consume_energy = 251,
    turn_off_focus_ads = 252,
    enable_energy = 253,
    start_level_x2 = 254,
}

public enum RemoteConfigDatabaseKey
{
    game_setting = 0,
    shop_database = 1,
    level_database = 2,
}