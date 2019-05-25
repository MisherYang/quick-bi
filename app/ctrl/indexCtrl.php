<?php
namespace app\ctrl;
use core\lib\model;

class indexCtrl extends \core\wege
{
	public function index()
	{
		$this->assign('pageTitle', 'QUICK-BI');
		$this->assign('resourceFolder', RESOURCE);
		$this->display('index.html');
		$_SESSION['loginIndex'] = true;
	}
}
