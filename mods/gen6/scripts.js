exports.BattleScripts = {
    init: function() {
        for (var i in this.data.FormatsData)
            this.data.FormatsData[i].dreamWorldRelease = true;
    	}
    	this.data.Pokedex.azumarill.types = ["Water","Fairy"];
    	this.data.Learnsets.azumarill.learnset.lunardance = ['5L0'];
    	this.data.Learnsets.azumarill.learnset.mysticcrash = ['5L0'];        
    
    	this.data.Pokedex.gardevoir.types = ["Psychic","Fairy"];
    	this.data.Learnsets.gardevoir.learnset.fairywind = ['5L0'];
        this.data.Learnsets.gardevoir.learnset.lunardance = ['5L0'];
        this.data.Learnsets.gardevoir.learnset.drainingkiss = ['5L0'];        

        this.data.Pokedex.clefable.types = ["Normal","Fairy"];
        this.data.Learnsets.clefable.learnset.fairywind = ['5L0'];
        this.data.Learnsets.clefable.learnset.lunardance = ['5L0'];
        this.data.Learnsets.clefable.learnset.topsyturvey = ['5L0'];     
        
        this.data.Pokedex.gallade.types = ["Fighting","Fairy"];
        this.data.Learnsets.gallade.learnset.fairywind = ['5L0'];
        this.data.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.data.Learnsets.gallade.learnset.drainingkiss = ['5L0'];              
        this.data.Learnsets.gallade.learnset.lunardance = ['5L0'];
        this.data.Learnsets.gallade.learnset.mysticcrash = ['5L0'];        
             
};
