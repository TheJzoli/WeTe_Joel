<?php

// follow gethint.php
// get the q parameter from URL
//  $q = $_REQUEST["q"];
// change the following

$q = $_REQUEST["q"];

if (!empty($q)){
  /**
   * Here we build the url we'll be using to access the google maps api
   */
  $maps_url = 'https://'.
  'maps.googleapis.com/'.
  'maps/api/geocode/json'.
  '?address=' . urlencode($q);
  $maps_json = file_get_contents($maps_url);
  $maps_array = json_decode($maps_json, true);
  $lat = $maps_array['results'][0]['geometry']['location']['lat'];
  $lng = $maps_array['results'][0]['geometry']['location']['lng'];
  /**
   * Time to make our Instagram api request. We'll build the url using the
   * coordinate values returned by the google maps api
   */
  $instagram_url = 'https://'.
    'api.instagram.com/v1/media/search' .
    '?lat=' . $lat .
    '&lng=' . $lng .
    '&client_id=CLIENT-ID'; //replace "CLIENT-ID"
  $instagram_json = file_get_contents($instagram_url);
  //$instagram_array = json_decode($instagram_json, true);

  echo $instagram_json;
 // give it back to Javascript

    // Twitterin apin käyttämiseen oikeasti tarvitsisi oauth avaimen.
    $twitter_url = 'https://'.
    'api.twitter.com/1.1/search/tweets.json'.
    '?q=coding'.
    '&geocode=' . $lat . ',' . $lng . ',2km';
    $tweets_json = file_get_contents($twitter_url);

    echo $tweets_json;
}
?>