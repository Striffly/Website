function SlotsFunctions (Timeline) {

    var slotFunctions = this

    // This needs a bit more refactoring

    // Permet de renvoyer un slot de la timeline

    slotFunctions.get = function(id, callback) {
        Timeline.findById(id, function(err, slot) {
            if (err) {
                console.log('Could not find the slot')
            } else {
                callback(slot || [])
            }
        })
    }
    
    // Pour inverser l'ordre de tri, passer de 1 à -1

    slotFunctions.order = function (callback) {
        Timeline.find({}).sort({'startDate' : 1, 'endDate': 1}).exec(function(err, slots) {
            if (err) {
                console.log('Could not find the timeline')
            } else {
                if (callback)
                    callback(slots || [])
            }
        })
    }

    // Permet l'ajout d'un nouveau slot sur la timeline

    slotFunctions.add = function(params, callback) {
        let newSlot = new Timeline({startDate: convertDate(params.startDate), endDate: convertDate(params.endDate),
                                    description: params.description, title: params.title, assignee: params.assignee})
        newSlot.save(function(error) {
            if (error) {
                callback(error)
            } else {
                slotFunctions.order(callback())
            }
        })
    }

    // Permet de modifier un slot déjà existant sur la timeline

    slotFunctions.edit = function(body, id, callback) {
        slotFunctions.get(id, function(slot) {
            var keys = ['startDate', 'endDate', 'description', 'title', 'assignee']
            copyObjectKeys(body, slot, keys)
            slot.startDate = convertDate(slot.startDate)
            slot.endDate = convertDate(slot.endDate)
            slot.save(function(error) {
                if (!error) {
                    callback()
                } else {
                    callback(error)
                }
            })
        })
    }

    // Permet d'update le statut d'un slot existant sur la timeline

    slotFunctions.update = function(body, id, callback) {
        slotFunctions.get(id, function(slot) {
            var keys = ['status']
            copyObjectKeys(body, slot, keys)
            slot.save(function(error) {
                if (!error) {
                    callback()
                } else {
                    callback(error)
                }
            })
        })
    }

    // Permet de delete un slot de la timeline

    slotFunctions.delete = function(id, callback) {
        slotFunctions.get(id, function(slot) {
            slot.remove({_id : id}, function(error) {
                if (error) {
                    callback(error)
                } else {
                    callback()
                }
            })
        })
    }

    return slotFunctions
}

/* UTILS */

function copyObjectKeys (source, destination, keys) {
    keys.forEach(function (key) {
        if (source[key])
            destination[key] = source[key]
    })
}

function reverseDate (date) {
    var chunks = date.split('-')
    return chunks[2] + '-' + chunks[1] + '-' + chunks[0]
}

function convertDate (date) {
    var chunks = date.split('-')
    return reverseDate(chunks[2] + '-' + chunks[1] + '-' + chunks[0])
}

module.exports = SlotsFunctions