_currentList = {
    listName: "Tanks for the memories",
    units: [
        {
            name: "Obi-Won Kenobi",
            unitCost: 170,
            models:1,
            wounds: 6,
            loyalty: 3,
            defenseDie: "red",
            hitSurge: "-",
            defenseSurge: "-",
            keywords: {
                charge: {
                    description: "after performing a move action, you may attack without spending an action",
                },
                jump: {
                    description: "you may ignore terrain of height [x] or less while performing a move action",
                    exhausted: false,
                    isExhaustible: true,
                    X: 1
                },

            },
            weapons: {
                Lightsaber: {
                    attackPool: "rrbbww",
                    range: 0,
                    keywords: {
                        critical: {
                            description: "surge to crit [X] times",
                            X: 2
                        },
                        impact: {
                            description: "When attacking a unit with armor, change [X] hits to critical hits",
                            X: 2
                        },
                        pierce: {
                            description: "Ignore [X] blocks from the defending pool",
                            X: 2,
                        }
                    }
                },
                saberThrow: {
                    
                }
            },
            upgrades: {
                lightSide: {
                    cap: 2,
                    upgrades:[
                        {
                            name: "Saber Throw",
                            cost: 5,
                            action: "add-weapon",
                            weapon: {
                                displayText: "Saber Throw",
                                attackPool: "rbw",
                                range: {
                                    start: 1,
                                    stop: 2
                                },
                                keywords: {
                                    critical: {
                                        description: "surge to crit [X] times",
                                        X: 2
                                    },
                                    impact: {
                                        description: "When attacking a unit with armor, change [X] hits to critical hits",
                                        X: 2
                                    },
                                    pierce: {
                                        description: "Ignore [X] blocks from the defending pool",
                                        X: 2,
                                    }
                                }
                            }
                        },
                        {
                            name: "Force Reflexes",
                            cost: 15,
                            action: "add-keyword",
                            keyword: {
                                description: "[exhaust] : add 1 dodge token to this unit",
                                exhausted: false,
                                isExhaustible: true
                            }
                        }
                    ]
                },
                command: {

                },
                training: {
                    
                }
            }
        },
        {
            name: "Captain Rex",
        },
        {
            name: "Phase II Troopers",
        },
        {
            name: "Phase II Troopers",
        }
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

function LoadBattleList(list) {
    var domBattleList = $("#current-battle-list-display");
    list.units.forEach( (unit) => {
        var unitStr = `<div class='column is-one-third unit-card'><h2>${unit.name}</h2><hr></div>`;
        domBattleList.append(unitStr);
    })
}