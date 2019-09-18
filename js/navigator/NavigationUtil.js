const NavigationUtil = {
  // 跳转到指定页面
  goPage: (params, page) => {
    const navigation = NavigationUtil.navigation;
    // const {navigation} = params;
    if (!navigation) {
      console.log('NavigationUtil.navigation can not be null');
      return;
    }
    navigation.navigate(page, {
      ...params,
    });
  },
  // 跳到首页
  resetToHomePage: params => {
    const {navigation} = params;
    navigation.navigate('Main');
  },
  // 返回上一页
  goBack: params => {
    const {navigation} = params;
    navigation.goBack();
  },
};

export default NavigationUtil;
