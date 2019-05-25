<?php
namespace core\lib;
use core\lib\config;

class route
{
	public $ctrl;
	public $action;

	public function __construct()
	{
		 // p($_SERVER);exit();
		if(isset($_SERVER['PATH_INFO']) && $_SERVER['PATH_INFO'] != '/') {
			$path = $_SERVER['PATH_INFO'];
			$patharr = explode('/', trim($path, '/'));
			if(isset($patharr[0])) {
				$this->ctrl = $patharr[0];
				unset($patharr[0]);
			}
			if(isset($patharr[1])) {
				$this->action = $patharr[1];
				unset($patharr[1]);
			} else {
				$this->action = config::get('ACTION', 'route');
			}

			// 将多余的url解析为GET属性及参数
			$count = count($patharr) + 1;
			for($i = 2; $i < $count; $i = $i + 2) {
				$_GET[$patharr[$i]] = $patharr[$i + 1];
			}

		} else {
			$this->ctrl = config::get('CTRL', 'route');
			$this->action = config::get('ACTION', 'route');
		}
	}
}
