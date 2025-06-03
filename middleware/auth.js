let count = 0;

const isLogin = async (req, res, next) => {
  try {
    if (!req.session.user_id) {
      return res.redirect('/login');
    }

   
    res.set("Cache-Control", "no-store");
    console.log(count++);
    next();
  } catch (error) {
    console.log(error.message);
  }
};

const isLogout = async (req, res, next) => {
  try {
    if (req.session.user_id) {
      return res.redirect('/users/home');
    }

    res.set("Cache-Control", "no-store");
    next();
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  isLogin,
  isLogout,
};
