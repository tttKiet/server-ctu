import db from "../app/models";

const getPost = (userId) => {
  let conditions = {};
  if (userId) {
    conditions = {
      where: {
        userId,
      },
    };
  }

  return new Promise(async (resolve, reject) => {
    try {
      const posts = await db.Post.findAll({
        ...conditions,
        raw: true,
        nest: true,
        order: [
          ["updatedAt", "DESC"],
          // ["name", "ASC"],
        ],
        attributes: {
          exclude: ["userId"],
        },
        include: [
          {
            model: db.User,
            as: "user",
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      if (posts) {
        resolve({
          errCode: 0,
          errMesagge: "",
          posts: posts,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const upPost = (data) => {
  console.log("up server", data);

  return new Promise(async (resolve, reject) => {
    const isHaveUser = await checkUserData(data.userId);
    console.log("have user", isHaveUser);
    if (!isHaveUser) {
      resolve({
        errCode: 1,
        errMessage: `Không có người dùng ${data.userId} trong hệ thống!`,
      });
    }
    try {
      const newPost = db.Post.create({
        userId: data.userId,
        title: data.title,
        description: data.description,
      });

      if (newPost) {
        resolve({
          errCode: 0,
          errMesagge: "",
        });
      }

      resolve({
        errCode: 2,
        errMesagge: "Thất bại",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const checkUserData = (userId) => {
  let isHaveUser = false;

  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        isHaveUser = true;
      }
      resolve(isHaveUser);
    } catch (err) {
      reject(err);
    }
  });
};

export default { getPost, upPost };
