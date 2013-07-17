exports.BattleScripts = {
        init: function() {
                for (var i in this.data.FormatsData)
                        this.data.FormatsData[i].dreamWorldRelease = true;
    	
	this.modData('Pokedex', 'azumarill').types = ["Water","Fairy"];
 	this.modData('Learnsets', 'azumarill').learnset.lunardance = ['5L0'];
 	this.modData('Learnsets', 'azumarill').learnset.mysticcrash = ['5L0'];        
    
	this.modData('Pokedex', 'gardevoir').types = ["Psychic","Fairy"];
	this.modData('Learnsets', 'gardevoir').learnset.fairywind = ['5L0'];
	this.modData('Learnsets', 'gardevoir').learnset.lunardance = ['5L0'];
	this.modData('Learnsets', 'gardevoir').learnset.drainingkiss = ['5L0'];
	this.modData('Learnsets', 'gardevoir').learnset.closecombat = ['5L0'];
	this.modData('Pokedex', 'gardevoir').baseStats = {hp:99,atk:140,def:145,spa:70,spd:140,spe:142};

	this.modData('Pokedex', 'clefable').types = ["Normal","Fairy"];
	this.modData('Learnsets', 'clefable').learnset.fairywind = ['5L0'];
	this.modData('Learnsets', 'clefable').learnset.lunardance = ['5L0'];
	this.modData('Learnsets', 'clefable').learnset.topsyturvy = ['5L0'];     
        
	this.modData('Pokedex', 'gallade').types = ["Fighting","Fairy"];
	this.modData('Learnsets', 'gallade').learnset.fairywind = ['5L0'];
	this.modData('Learnsets', 'gallade').lunardance = ['5L0'];
	this.modData('Learnsets', 'gallade').drainingkiss = ['5L0'];              
	this.modData('Learnsets', 'gallade').lunardance = ['5L0'];
	this.modData('Learnsets', 'gallade').mysticcrash = ['5L0'];
	
	this.modData('Learnsets', 'yveltal').learnset.toxic = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.doubleedge = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.oblivionwing = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.darkpulse = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.airslash = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.hurricane = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.aurasphere = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.dragondance = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.focusblast = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.superpower = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.roost = ['5L0'];
	
	this.modData('Learnsets', 'xerneas').learnset.toxic = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.doubleedge = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.geomancy = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.fairywind = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.gigadrain = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.leafstorm = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.aurasphere = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.calmmind = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.lunardance = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.powerwhip = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.superpower = ['5L0'];
	this.modData('Learnsets', 'yveltal').learnset.recover = ['5L0'];
		}
};
