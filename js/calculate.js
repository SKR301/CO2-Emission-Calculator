function updateRes() {
	powerConsumption = document.getElementById('powerConsumption').value;
	gasConsumption = document.getElementById('gasConsumption').value;
	woodConsumption = document.getElementById('woodConsumption').value;
	flyingEconomy = document.getElementById('flyingEconomy').value;
	flyingBusiness = document.getElementById('flyingBusiness').value;
	gasDriving = document.getElementById('gasDriving').value;
	dieselDriving = document.getElementById('dieselDriving').value;
	lpgDriving = document.getElementById('lpgDriving').value;
	plugIn = document.getElementById('plugIn').value;
	electric = document.getElementById('electric').value;
	_50ccScooter = document.getElementById('_50ccScooter').value;
	_125ccMotor = document.getElementById('_125ccMotor').value;
	_500ccMotor = document.getElementById('_500ccMotor').value;
	_500ccPMotor = document.getElementById('_500ccPMotor').value;
	tram = document.getElementById('tram').value;
	bus = document.getElementById('bus').value;
	train = document.getElementById('train').value;
	metro = document.getElementById('metro').value;
	taxi = document.getElementById('taxi').value;
	gas = document.getElementById('gas').value;
	diesel = document.getElementById('diesel').value;

	co2emission = (powerConsumption * 0.4521) + (gasConsumption * 0.05) + (woodConsumption * 70) + (flyingEconomy * 0.076) + (flyingBusiness * 0.2208) + (gasDriving * 0.174) + (dieselDriving * 0.168) + (lpgDriving * 0.198) + (plugIn * 0.07) + (electric * 0) + (_50ccScooter * 0.057) + (_125ccMotor * 0.064) + (_500ccMotor * 0.078) + (_500ccPMotor * 1.02) + (tram * 0.03) + (bus * 0.1) + (train * 0.04) + (metro * 0.03) + (taxi * 0.15) + (gas * 2.2) + (diesel * 2.5);
	treesNeeded = Math.ceil(co2emission / 500);
	costOfTrees = treesNeeded * 50;
	return20Yrs = treesNeeded * 10 * 20;

	document.getElementById('co2emission').innerHTML = "CO2 emission(kg): <br/> " + co2emission.toFixed(2);
	document.getElementById('treesNeeded').innerHTML = "Trees needed: <br/> " + treesNeeded.toFixed(2);
	document.getElementById('costOfTrees').innerHTML = "Costs of trees: <br/> " + costOfTrees.toFixed(2);
	document.getElementById('return20Yrs').innerHTML = "Return in 20yr: <br/>" + return20Yrs.toFixed(2);

	document.getElementById('compensateLink').style.display = "block";
}
