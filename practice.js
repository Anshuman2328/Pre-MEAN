        var tigger = {character: "Tigger"};
        var pooh = {character: "Winnie the Pooh"};
        var piglet = { character: "Piglet"};        
        var bees = {character: "Bees"};
        var christopherRobin = {character: "Christopher Robin"};
        var kanga = {character: "Kanga"};
        var owl = {character:"Owl"};
        var rabbit = {character: "Rabbit"};
        var gopher = {character: "Gopher"};
        var eeyore = {character: "Eeyore"};
        var heffalumps = {character: "Heffalumps"};


        
        tigger.north = pooh;
        pooh.south = tigger;
        piglet.east = tigger.north;          
        tigger.north.west = piglet;
        
        bees.west = tigger.north;
        tiger.north.east = bees;
        christopherRobin.south = tigger.north;
        christopherRobin.north = Kanga;
        piglet.north = owl;
        christopherRobin.west = piglet.north;
        bees.north = rabbit;
        christopherRobin.west = bees.north;
        gopher.west = rabbit;
        rabbit.east = bees.north.east;
        eeyore.south = christopherRobin.north;
        kanga.north = eeyore;
        eeyore.east = heffalumps;
        heffalumps.west = kanga.north;

        var player = {
            location: tigger
        }

        function move(direction){
            console.log("You are now in ${tigger.north}'s location")
        }

        console.log(move(north));