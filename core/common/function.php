<?php
function p($var)
{
	if (is_bool($var)) {
		var_dump($var);
	} else if (is_null($var)) {
		var_dump(NULL);
	} else {
		echo "<pre style='position:relative; z-index:1000; padding:10px; border-radius:5px; background:#F%F%F%; border:1px solid #aaa; font-size: 14px; line-height:18px; opacity:0.9;'>" . print_r($var, true) . "</pre>";
	}
}

function stackTrace($code, $content)
{
	return array("error" => $code, "error_content" => $content, "get_data" => $_GET, "post_data" => $_POST);
}
