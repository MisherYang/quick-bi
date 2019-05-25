<?php
namespace core\lib;
use core\lib\config;
use Medoo\Medoo;

class model extends Medoo
{
	public function __construct()
	{
		$option = config::all('database');
		parent::__construct($option);
	}
}