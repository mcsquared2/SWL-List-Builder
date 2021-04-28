_currentList = {
    listName: "Tanks for the memories",
    units: [
        {
            name: "Captain Rex",
            cost: 90,
            models: 1,
            wounds: 5,
            rank: "Commander",
            type: "Trooper",
            isCharacter: true,
            loyalty: 3,
            defenseDie: "red",
            attackSurge: "crit",
            defenseSurge: "-",
            movement: 2,
            faction: "Republic",
            keywords: [
                {
                    name: "tactical",
                    x: 1,
                    description: "After performing a move token, gain [x] aim tokens."
                }
            ],
            weapons: [
                {
                    name: "unarmed",
                    attackPool: "bb",
                    range: "melee",
                    keywords: [],
                },
                {
                    name: "E44 dueling pistols",
                    attackPool: "rrr",
                    range: "1-2",
                    keywords: [
                        {
                            name: "pierce",
                            x: 1,
                            description: "After defense dice are rolled, ignore [x] defense tokens",
                        }
                    ]
                }
            ]

        },
    ], 
    orders: {
        onePip: {
            generic: {
                name: "Ambush"
            }

        },
        twoPip: {
            generic: {
                name: "Push"
            }
        },
        threePip: {
            generic: {
                name: "Assault"
            }
        },
        fourPip: {
            generic: {
                name: "Standing Orders"    
            }
        }
    }
}

function GetTotalCost(unit) {
    cost = unit.unitCost;
    return cost;
}

function LoadBattleList(list) {
    var domBattleList = $("#current-battle-list-display");
    list.units.forEach( (unit) => {
        upgrades = "command, command, training, gear";
        keywords = "keyword1, keyword2";
        weapons = "weapon1, weapon2";

        var unitStr = `
        <div class='column is-half unit-card'>
            <div class='columns'>
                <div class='column is-one-quarter'>
                    <div class='subtitle'>Faction: ${unit.faction}</div>
                    <hr>
                    <div class='subtitle'>${unit.cost} pts</div>
                    <hr>
                    <div>
                        ${upgrades}
                    </div>
                </div>
                <div class='column is-half'>
                    <div class='subtitle'>
                        ${unit.name}
                    </div>
                    <hr>
                    <div>
                        ${keywords}
                    </div>
                    <hr>
                    <div>
                        ${weapons}
                    </div>
                </div>
                <div class='column is-one-quarter'>
                    <div>Rank: ${unit.rank}</div>
                    <div>model count: ${unit.models}</div>
                    <hr>
                    <div>${unit.type}</div>
                    <hr>
                    <div>${unit.wounds}</div>
                    <div>${unit.loyalty}</div>
                    <div>${unit.defenseDie}</div>
                    <div>attack surge: ${unit.attackSurge}</div>
                    <div>defense surge: ${unit.defenseSurge}</div>
                    <div>Movement: ${unit.movement}</div>
                </div>
            </div>
        </div>`;
        domBattleList.append(unitStr);
    })
}