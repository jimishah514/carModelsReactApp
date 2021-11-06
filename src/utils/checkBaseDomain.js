exports.checkBaseDomain = (host) => {
    switch (host) {
      case 'localhost':
        return 'http://localhost:3002'
      case 'stage.carModles':
        return 'https://api.stage.carModles.org'
      case 'production.carModels':
        return 'https://api.carModles.org'
      default:
        return ''
    }
  }