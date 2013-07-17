exports.BattleScripts = {
        init: function() {
                for (var i in this.data.FormatsData)
                        this.data.FormatsData[i].dreamWorldRelease = true;
    	
    	this.data.Pokedex.azumarill.types = ["Water","Fairy"];
    	this.data.Learnsets.azumarill.learnset.lunardance = ['5L0'];
    	this.data.Learnsets.azumarill.learnset.mysticcrash = ['5L0'];        
    
    	this.data.Pokedex.gardevoir.types = ["Psychic","Fairy"];
    	this.data.Learnsets.gardevoir.learnset.fairywind = ['5L0'];
        this.data.Learnsets.gardevoir.learnset.lunardance = ['5L0'];
        this.data.Learnsets.gardevoir.learnset.drainingkiss = ['5L0'];
        this.data.Learnsets.gardevoir.learnset.closecombat = ['5L0'];
        this.data.Pokedex.gardevoir.baseStats = {hp:99,atk:140,def:145,spa:70,spd:140,spe:142};

        this.data.Pokedex.clefable.types = ["Normal","Fairy"];
        this.data.Learnsets.clefable.learnset.fairywind = ['5L0'];
        this.data.Learnsets.clefable.learnset.lunardance = ['5L0'];
        this.data.Learnsets.clefable.learnset.topsyturvy = ['5L0'];     
        
        this.data.Pokedex.gallade.types = ["Fighting","Fairy"];
        this.data.Learnsets.gallade.learnset.fairywind = ['5L0'];
        this.data.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.data.Learnsets.gallade.learnset.drainingkiss = ['5L0'];              
        this.data.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.data.Learnsets.gallade.learnset.mysticcrash = ['5L0'];
		}
};
