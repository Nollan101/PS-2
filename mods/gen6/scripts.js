exports.BattleScripts = {
        init: function() {
                for (var i in this.data.FormatsData)
                        this.data.FormatsData[i].dreamWorldRelease = true;
    	
    	this.mods.gen6.Pokedex.azumarill.types = ["Water","Fairy"];
    	this.mods.gen6.Learnsets.azumarill.learnset.lunardance = ['5L0'];
    	this.mods.gen6.Learnsets.azumarill.learnset.mysticcrash = ['5L0'];        
    
    	this.mods.gen6.Pokedex.gardevoir.types = ["Psychic","Fairy"];
    	this.mods.gen6.Learnsets.gardevoir.learnset.fairywind = ['5L0'];
        this.mods.gen6.Learnsets.gardevoir.learnset.lunardance = ['5L0'];
        this.mods.gen6.Learnsets.gardevoir.learnset.drainingkiss = ['5L0'];
        this.mods.gen6.Learnsets.gardevoir.learnset.closecombat = ['5L0'];
        this.mods.gen6.Pokedex.gardevoir.baseStats = {hp:99,atk:140,def:145,spa:70,spd:140,spe:142};

        this.mods.gen6.Pokedex.clefable.types = ["Normal","Fairy"];
        this.mods.gen6.Learnsets.clefable.learnset.fairywind = ['5L0'];
        this.mods.gen6.Learnsets.clefable.learnset.lunardance = ['5L0'];
        this.mods.gen6.Learnsets.clefable.learnset.topsyturvy = ['5L0'];     
        
        this.mods.gen6.Pokedex.gallade.types = ["Fighting","Fairy"];
        this.mods.gen6.Learnsets.gallade.learnset.fairywind = ['5L0'];
        this.mods.gen6.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.mods.gen6.Learnsets.gallade.learnset.drainingkiss = ['5L0'];              
        this.mods.gen6.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.mods.gen6.Learnsets.gallade.learnset.mysticcrash = ['5L0'];
		}
};
