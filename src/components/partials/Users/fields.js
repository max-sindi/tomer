const general = [
  {
    both: 'createdat',
    isDate: true,
  },
  {
    both: 'username'
  },
  {
    both: 'roles'
  }
  // {
  //   inRedux: 'profile',
  //   inServer: 'profile',
  // },
  // {
  //   inRedux: 'profileFirstname',
  //   inServer: 'profile.firstName',
  // },
  // {
  //   inRedux: 'profileLastname',
  //   inServer: 'profile.lastName',
  // },
  // {
  //   inRedux: 'profilePostcode',
  //   inServer: 'profile.postcode',
  // },
  // {
  //   inRedux: 'termsAgreed',
  //   inServer: 'profile.termsAgreed',
  // },
  // {
  //   inRedux: 'isStudent',
  //   inServer: 'profile.isStudent',
  // },
  // {
  //   inRedux: 'hasGuarantor',
  //   inServer: 'profile.hasGuarantor',
  // },
]

const profile = [
  {
    both: 'picture',
  },
  {
    both: 'name',
  },
  {
    both: 'lastName',
  },
  {
    both: 'firstName',
  },
  {
    both: 'postcode',
  },
  {
    both: 'termsAgreed',
  },
  {
    both: 'isStudent',
  },
  {
    both: 'hasGuarantor',
  },
]



export default {
  general,
  profile,
}
