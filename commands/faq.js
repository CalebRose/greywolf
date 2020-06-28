exports.run = (client, msg, args) => {
  msg.channel.send({
    embed: {
      color: 3447003,
      title: 'Rules',
      description: 'General Rules for the server & participating in the game',
      fields: [
        {
          name: '#1: Treat others with respect',
          value:
            'Please treat others with the way you want to be treated, sir. If you treat others like shit, be expected to be treated as such and shoveled away.',
        },
        {
          name:
            '#2: Keep all Out-Of-Context discussions in the #Off-Topic channels',
          value:
            'If you and a brethren are having fun with a discussion on matters outside of Reges, I suggest you head to #smiths-bar to hold those discussions',
        },
        {
          name: '#3: Do Not Spam',
          value:
            'No one wants to buy your snake oil, so please stop advertising such if you keep doing it in repetition. It is suggested that if you do wish to promote something on this channel that you speak with the administrator first.',
        },
        {
          name: '#4: Admin Rights',
          value:
            'The administrator @TuscanSota reserves the right to remove anyone from this server should they break the above rules or cause a ruckus.',
        },
        {
          name: '#5: Have fun',
          value:
            "Please remember the purpose of this server and why we're all here. :)",
        },
      ],
      footer: {
        icon_url: client.user.avatarURL,
        text: '© Rubicon Innovations',
      },
    },
  });
};
