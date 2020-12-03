var alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function FindAndReturn(str)
{
  if (str==str.toUpperCase())
  {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMN'.split('');
  }
  if (str==str.toLowerCase())
  {
    var alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmn'.split('');
  }
  for (var i=0; i<26;++i)
  {
    if (str==alphabet[i])
    {
      return alphabet[i+13];
    }
  }
}
function rot13(message)
{
  var result=[];
  for (var i in message)
  {
    console.log(message[i]);
    if (alpha.includes(`${message[i]}`))
    {
      result.push(FindAndReturn(message[i]));
    }
    else result.push(message[i]);
  }
  return result.join('');
}
