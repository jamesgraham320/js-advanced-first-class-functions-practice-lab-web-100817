// Code your solution in this file!
const logDriverNames = function(drivers) {
	drivers.forEach (function (driver) {
		console.log(driver.name)
	})
}

const logDriversByHometown = function (drivers, hometown) {
	drivers.forEach (function (driver) {
		if (driver.hometown === hometown) {
			console.log(driver.name)
		}
	})
}

const driversByRevenue = function(drivers) {
	let sortedDrivers = drivers.slice(0)
	sortedDrivers.sort(function (driver1, driver2) {
		return driver1.revenue - driver2.revenue
	})
	return sortedDrivers
}

const driversByName = function(drivers) {
	let sortedDrivers = drivers.slice(0)
	sortedDrivers.sort(function (driver1, driver2) {
		return driver1.name.localeCompare(driver2.name)
	})
	return sortedDrivers
}

const totalRevenue = function(drivers) {
	let total = drivers.reduce(function(total, driver) {
		return total + driver.revenue}, 0)
	return total
}

const averageRevenue = function(drivers) {
	let total = totalRevenue(drivers)
	return total/drivers.length
}
