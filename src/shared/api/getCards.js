const cards = () => {
  return [
    {
      name: 'imya',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya2',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya3',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya4',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya5',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya6',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya7',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya8',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya9',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya10',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya11',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya12',
      info1: 'info1',
      info2: 'info2'
    },
    {
      name: 'imya13',
      info1: 'info1',
      info2: 'info2'
    }
  ]
}

export const getCards = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(cards()), 3000)
  })
}