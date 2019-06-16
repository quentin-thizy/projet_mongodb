db.getCollection('joueurs').find({
   date_naissance : {$regex:'[0-3][0-9]/[0-1][0-9]/199[4-9]|[0-3][0-9]/[0-1][0-9]/20[0-9][0-9]'},
   poste : "DEF"
})
