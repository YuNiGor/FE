let currentUserId = 1;
const userIdInput = document.getElementById('userIdInput');
const errorContainer = document.getElementById('errorContainer');
const userCardContainer = document.getElementById('userCardContainer');

const prevUserButton = document.getElementById('prevUserButton');
const nextUserButton = document.getElementById('nextUserButton');

prevUserButton.addEventListener('click', async () => {
  if (currentUserId > 1) {
    currentUserId--;
    userIdInput.value = currentUserId;
    await getUserDataAndUpdateCard(currentUserId);
  }
});

nextUserButton.addEventListener('click', async () => {
  currentUserId++;
  userIdInput.value = currentUserId;
  await getUserDataAndUpdateCard(currentUserId);
});

async function getUserDataAndUpdateCard(userId) {
  try {
    const userData = await getUserData(userId);
    const userCard = generateUserCard(userData);
    userCardContainer.innerHTML = '';
    userCardContainer.appendChild(userCard);
    errorContainer.textContent = '';
  } catch (error) {
    console.error(error.message);
    errorContainer.textContent = error.message;
  }
}

async function getUserData(userId) {
  const [responseUser, responsePosts] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  ]);

  if (responseUser.ok && responsePosts.ok) {
    const userData = await responseUser.json();
    const userPosts = await responsePosts.json();

    return {
      user: {
        name: userData.name,
        email: userData.email
      },
      posts: userPosts
    };
  } else {
    throw new Error("Такого пользователя нет");
  }
}

function generateUserCard(data) {
  const userContainer = document.createElement('div');
  userContainer.classList.add('user-container');

  const userDiv = document.createElement('div');
  userDiv.classList.add('user');

  const userName = document.createElement('p');
  userName.textContent = `Имя пользователя: ${data.user.name}`;

  const userEmail = document.createElement('p');
  userEmail.textContent = `Почта пользователя: ${data.user.email}`;

  userDiv.appendChild(userName);
  userDiv.appendChild(userEmail);

  const postsDiv = document.createElement('div');
  postsDiv.classList.add('posts');

  for (const post of data.posts) {
    const postItem = document.createElement('div');
    postItem.classList.add('item');

    const postTitle = document.createElement('p');
    postTitle.textContent = `Название поста: ${post.title}`;

    const postBody = document.createElement('p');
    postBody.textContent = `Текст поста: ${post.body}`;

    postItem.appendChild(postTitle);
    postItem.appendChild(postBody);

    postsDiv.appendChild(postItem);
  }

  userContainer.appendChild(userDiv);
  userContainer.appendChild(postsDiv);

  return userContainer;
}

const getUserDataButton = document.getElementById('getUserDataButton');

getUserDataButton.addEventListener('click', async () => {
  const userId = userIdInput.value.trim();

  try {
    const userData = await getUserData(userId);
    const userCard = generateUserCard(userData);
    userCardContainer.innerHTML = '';
    userCardContainer.appendChild(userCard);
    errorContainer.textContent = '';
  } catch (error) {
    console.error(error.message);
    errorContainer.textContent = error.message;
  }
});
