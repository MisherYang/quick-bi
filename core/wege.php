<?php

namespace core;

class wege
{
	public static $classMap = array();
	public $assign;

	static public function run()
	{
		
		$route = new \core\lib\route();
		$ctrlClass = $route->ctrl;
		$action = $route->action;

		$ctrlfile = APP.'/ctrl/'.$ctrlClass.'Ctrl.php';
		$ctrlClass = '\\'.MODULE.'\ctrl\\'.$ctrlClass.'Ctrl';
		if(is_file($ctrlfile)) {
			include $ctrlfile;
			$ctrl = new $ctrlClass();
			if(method_exists($ctrl, $action)) {
				$ctrl->$action();
			} else {
				if(DEBUG) {
					throw new \Exception('找不到方法'.$action);
				} else {
					header('Content-Type:application/json; charset=utf-8');
					exit(json_encode(stackTrace("00101", "在控制器".$route->ctrl."中找不到方法".$action)));
				}
			}
		} else {
			if(DEBUG) {
				throw new \Exception('找不到控制器'.$ctrlClass);
			} else {
				header('Content-Type:application/json; charset=utf-8');
				exit(json_encode(stackTrace("00102", "找不到控制器".$route->ctrl)));
			}
		}
	}

	static public function load($class)
	{
		// 自动加载类库
		// 将 ‘\core\route' 转化为 WEGE.'/core/route.php'
		if(isset($classMap[$class])) {
			return true;
		} else {
			$class = str_replace('\\', '/', $class);
			$file = WEGE . '/' . $class . '.php';
			if(is_file($file)) {
				include $file;
				self::$classMap[$class] = $class;
			} else {
				return false;
			}
		}
	}

	public function assign($name, $value)
	{
		$this->assign[$name] = $value;
	}

	public function display($file)
	{
		$path = APP.'/views/'.$file;
		if(is_file($path)) {
			\Twig_Autoloader::register();
			$loader = new \Twig_Loader_Filesystem(APP.'/views');
			$twig = new \Twig_Environment($loader, array(
				'cache' => WEGE.'/template',
				'debug' => DEBUG
			));
			$template = $twig->loadTemplate($file);
			$template->display($this->assign?$this->assign:'');
		}
	}
}
