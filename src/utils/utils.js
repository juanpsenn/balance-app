export const matchImg = (displayName) => {
  if (displayName.includes("Juan")) {
    return "https://cdn.discordapp.com/avatars/788760849455251456/f8736ded3fbfef5b5c45545ed60389c5.png?size=128";
  } else if (displayName.includes("Micka")) {
    return "https://cdn.discordapp.com/avatars/788735122861195294/01f0f4fc033b3a53bbf72560f861444a.png?size=128";
  } else if (displayName.includes("Diego")) {
    return "https://cdn.discordapp.com/avatars/671446359072833537/35d36c2300f63bcb7c2cc54ba8ff2a67.png?size=128";
  } else if (displayName.includes("Eliana") || displayName.includes("Elu")) {
    return "https://cdn.discordapp.com/avatars/788829992695234581/b160f20b27ee4c9a93e63b60b36d1d83.png?size=128";
  } else if (displayName.includes("Enzo")) {
    return "https://cdn.discordapp.com/avatars/788621932836683817/7cc43b8d30328cce0899e4857b83ec51.png?size=128";
  }
};
