function solucao(altitude) {
    if (altitude <= 20) {
      return "TROPOSFERA";
    } else if (altitude <= 50) {
      return "ESTRATOSFERA";
    } else if (altitude <= 80) {
      return "MESOSFERA";
    } else if (altitude <= 450) {
      return "TERMOSFERA";
    } else {
      return "EXOSFERA";
    }
  }
  