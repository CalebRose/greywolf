//

exports.run = async (client, msg, args, db) => {
  //
  let docRef = db.collection('Players').doc(msg.author.id);
  let getDoc = await docRef.get();
  const data = getDoc.data();
};
