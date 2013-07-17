exports.BattleScripts = {
        init: function() {
                for (var i in this.data.FormatsData)
                        this.data.FormatsData[i].dreamWorldRelease = true;
    	
    	this.gen6.Pokedex.azumarill.types = ["Water","Fairy"];
    	this.gen6.Learnsets.azumarill.learnset.lunardance = ['5L0'];
    	this.gen6.Learnsets.azumarill.learnset.mysticcrash = ['5L0'];        
    
    	this.gen6.Pokedex.gardevoir.types = ["Psychic","Fairy"];
    	this.gen6.Learnsets.gardevoir.learnset.fairywind = ['5L0'];
        this.gen6.Learnsets.gardevoir.learnset.lunardance = ['5L0'];
        this.gen6.Learnsets.gardevoir.learnset.drainingkiss = ['5L0'];
        this.gen6.Learnsets.gardevoir.learnset.closecombat = ['5L0'];
        this.gen6.Pokedex.gardevoir.baseStats = {hp:99,atk:140,def:145,spa:70,spd:140,spe:142};

        this.gen6.Pokedex.clefable.types = ["Normal","Fairy"];
        this.gen6.Learnsets.clefable.learnset.fairywind = ['5L0'];
        this.gen6.Learnsets.clefable.learnset.lunardance = ['5L0'];
        this.gen6.Learnsets.clefable.learnset.topsyturvy = ['5L0'];     
        
        this.gen6.Pokedex.gallade.types = ["Fighting","Fairy"];
        this.gen6.Learnsets.gallade.learnset.fairywind = ['5L0'];
        this.gen6.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.gen6.Learnsets.gallade.learnset.drainingkiss = ['5L0'];              
        this.gen6.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.gen6.Learnsets.gallade.learnset.mysticcrash = ['5L0'];
		}
};
