<?php

	require_once('../domains/customerDAO.php');

	$customer = new CustomerDAO();

	$process = $customer->fetchAllCustomers();

	echo json_encode($process);