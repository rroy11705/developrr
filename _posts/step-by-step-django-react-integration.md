---
id: 1
title: 'Integrating Django Backend with React Frontend'
date: '09-12-2023'
excerpt: 'Explore the art of seamless UI with React.js and dive into the backend wonders of Python (Django). ✨🚀 #FullStackMagic'
cover: '/images/post1/image-seo.jpg'
time: '10 min'
category: 'Full Stack'
link: 'fullstack'
language: 'en'

metakeyword: 'django, react, integration, web development'
metadescription: 'In this blog, we will walk you through the process of integrating a Django Rest Framework backend with a React frontend.'
---

![Integrating Django Backend with React Frontend](images/post1/image-seo.jpg)

In the world of web development, the combination of Django Rest Framework and React is a powerful one. DRF is an extension of the Django web framework, which is known for its simplicity, flexibility, and robustness, making it an excellent choice for backend development. On the other hand, React, with its component-based architecture and efficient rendering, is a popular choice for frontend development.

In this blog, we will walk you through the process of integrating a Django Rest Framework backend with a React frontend. To demonstrate this we will be creating a CRUD application where you can manage your watchlist and the streaming services of the shows. In this blog, we will mostly focus on the integration part, for more details the code repositories are attached at the end of this blog.

## Step 1: Setting Up the Django Rest Framework

DRF provides a high-level, reusable set of tools that simplify API development. This allows developers to create APIs quickly and efficiently, reducing development time and effort. Let’s start setting up the backend.

➡️ Installing Python and Virtual Environment: 

If you don’t have Python in your system here is the link to download and install [Python](https://www.python.org/downloads/). During installation, make sure pip is also installed with it. After the installation, let’s move to creating the project. Before that, it is important to use a virtual environment for any Python project to segregate packages from conflicting globally. Here’s the command to create and activate a virtual environment.

```cmd
> python -m venv env
> env\Scripts\activate
```

➡️ Install Django and Django REST Framework:

```cmd
> pip install django djangorestframework
```

➡️ Create a new Django project and navigate into it:

```cmd
> django-admin startproject backend
> cd backend
```

➡️ Create a new Django app:

```cmd
> python manage.py startapp app
```

➡️ In the models.py file of the API app, we need to define our models. These are the data structures that Django will use to create the database schema.

➡️ Create a folder API in the app to keep and In the app/api/serializers.py file, define your serializers. These will be used to convert model instances to JSON.

➡️ In the app/api/views.py file, define your views. These will handle HTTP requests and responses.

➡️ Finally, in the app/api/urls.py file, define your URL routes. These will map URLs to views. We will use these URLs (endpoints) to send/receive data to/from the backend. Here is the URL file:

```py
# urls.py
from django.urls import path
from app.api import views

urlpatterns = [
  path('', views.WatchListAV.as_view(), name="watchlist"),
  path('<int:pk>/', views.WatchListDetailAV.as_view(), name="watchlist-detail"),

  path('platform/', views.StreamPlatformAV.as_view(), name='streamplatform-list'),
  path('platform/<int:pk>/', views.StreamPlatformDetailAV.as_view(), name='streamplatform-detail'),
]
```

## Step 2: Setting Up the React Frontend

We will use the Create React app, a tool that sets up a modern web app by running one command.

➡️ Install Node.js and npm: Node.js is a JavaScript runtime that allows you to run JavaScript on your server. npm is a package manager for [Node.js](https://nodejs.org/en/download).

➡️ Create a new React app and navigate into it:

```cmd
// urls.py
> npx create-react-app frontend
> cd frontend
```

➡️  In the src directory, create your components. Each component should be in its file and should have a .jsx extension. We will be using @tanstack/react-query to create custom hooks to fetch, create, update, and delete data from the backend. We will also use @tanstack/react-table to create tables that will show data that is fetched from the backend. Let’s install the packages using this command:

```cmd
> yarn add @tanstack/react-query @tanstack/react-table
```

After installation, you will see that the package.json is updated and the above packages will be present in the dependencies array.

➡️ Let’s understand how the frontend code is structured around a few key components and functionalities. Here’s a brief overview:

![frontend-code-structure](images/post1/frontend-code-structure.webp)

- __App Component (App.jsx):__ This is the root component of the application. It maintains a state variable activeTab to switch between ShowsTable and PlatformTable components based on user interaction.

- __ShowsTable and PlatformTable Components (ShowsTable.jsx and PlatformTable.jsx):__ These components fetch and display data from the backend using useFetchShows and useFetchPlatforms hooks respectively. They also define the structure of the tables and the actions that can be performed on each row.

- __CreateUpdateShowForm and CreateUpdatePlatformForm Components (CreateUpdateShowForm.jsx and CreateUpdatePlatformForm.jsx):__ These components are used to create or update a show or platform. They use useCreateShow, useUpdateShow, useCreatePlatforms, and useUpdatePlatform hooks for these operations.

- __React Query Hooks (shows.queries.js and platforms.queries.js):__ These files contain custom hooks that use the React Query library to fetch, create, update, and delete data from the backend.

- __HTTP Requests (shows.requests.js and platforms.requests.js):__ These files contain functions that make HTTP requests to the backend using the Fetch API.

- __HTTP Utility (http.js):__ This file contains utility functions to make HTTP requests and handle responses.

- __CSS Styles (index.css):__ This file contains global styles for the application, including styles for the modal used in the form components.

## Step 3: Integrating the Backend with the Frontend

➡️ In your Django we need to install a package called django-cors-headers. While installing make sure your virtual environment is active. Here is the command to install.

```cmd
> pip install django-cors-headers
```

➡️ After successful installation, we need to make the following changes in the settings.py file.

```py
# settings.py

INSTALLED_APPS = [
  ...
  'app',
  'rest_framework',
  'corsheaders'
]

MIDDLEWARE = [
  ...
  'django.contrib.sessions.middleware.SessionMiddleware',
  'corsheaders.middleware.CorsMiddleware',
  ...
]

REST_FRAMEWORK = {
  'DEFAULT_PERMISSION_CLASSES': [
    'rest_framework.permissions.AllowAny',
  ]
}

CORS_ALLOWED_ORIGINS = [
  'http://localhost:3000' # i am using 3000 port to run the frontend server
]
```

➡️ Now we need to create migrations and migrate the database.

```cmd
> python manage.py makemigrations
> python manage.py migrate
```

__Note:__ We are using the inbuilt SQLite database that comes with Django. If you want to use your custom database, you can update the database settings in settings.py.

➡️ Now we are ready to start our backend server using the following command:

```cmd
> python manage.py runserver
```

➡️ In your React app, create a utility file called http.js. It contains the get, post, put and delete API call logic using the global fetch method. The global *fetch()* method starts the process of fetching a resource from the network (here it is our backend), returning a promise that is fulfilled once the response is available.

➡️ Then we set up the requests files, shows.requests.js and platforms.requests.js inside api/requests. These files help us call the get, post, put and delete utility functions that we wrote in the http.js. Here is the code.

```js
// shows.requests.js

import http from '../http';

const BASE_URL = '/watch-list/';

export const fetchShows = () =>
  http.get(BASE_URL);

export const fetchShow = (id) =>
  http.get(`${BASE_URL}${id}/`);

export const createShow = (data) =>
  http.post(BASE_URL, data);

export const updateShow = (data, id) =>
  http.put(`${BASE_URL}${id}/`, data);

export const removeShow = (id) =>
  http.delete(`${BASE_URL}${id}/`);

```

```js
// platforms.requests.js

import http from '../http';

const BASE_URL = '/watch-list/platform/';

export const fetchPlatforms = () =>
  http.get(BASE_URL);

export const createPlatform = (data) =>
  http.post(BASE_URL, data);

export const updatePlatform = (data, id) =>
  http.put(`${BASE_URL}${id}/`, data);

export const removePlatform = (id) =>
  http.delete(`${BASE_URL}${id}/`);
```

➡️ Now we have to set up the queries inside the api/queries folder. We create two files, __shows.queries.js__ and __platforms.queries.js__. You can refer to the @tanstack/react-query [documentation](https://tanstack.com/query/v4/docs/react/adapters/react-query) to understand the hooks in more detail.

```js
// shows.queries.js

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createShow, fetchShow, fetchShows, removeShow, updateShow } from '../requests/shows.requests';

export const useFetchShows = () =>
  useQuery(
    ['shows'],
    async () => {
      const res = await fetchShows();
      return res;
    },
  );

export const useFetchShow = (id) =>
  useQuery(
  ['shows'],
  async () => {
    const res = await fetchShow(id);
    return res;
  },
  {
    enabled: id !== undefined,
  },
  );

export const useCreateShow = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async data => {
      const res = await createShow(data);
      return res;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['shows']),
    },
  );
};

export const useUpdateShow = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ data, id }) => {
      const res = await updateShow(data, id);
      return res;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['shows']),
    },
  );
};

export const useRemoveShow = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async id => {
      const res = await removeShow(id);
      return res;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['shows']),
    },
  );
};
```

```js
// platforms.queries.js

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createPlatform, fetchPlatforms, removePlatform, updatePlatform } from '../requests/platforms.requests';

export const useFetchPlatforms = () =>
  useQuery(
    ['platforms'],
    async () => {
      const res = await fetchPlatforms();
      return res;
    },
  );

export const useCreatePlatforms = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async data => {
      const res = await createPlatform(data);
      return res;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['platforms']),
    },
  );
};

export const useUpdatePlatform = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ data, id }) => {
      const res = await updatePlatform(data, id);
      return res;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['platforms']),
    },
  );
};

export const useRemovePlatform = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async id => {
      const res = await removePlatform(id);
      return res;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['platforms']),
    },
  );
};
```

➡️ Now we can start the process of calling the APIs in our component. We call the useFetchShow hook and it will call the backend and the response of the get request will be saved inside the shows constant.

```jsx
const shows = useFetchShows();
```

➡️ For post, put and delete we need to use the mutateAsync method to get a promise which will resolve on success or throw on an error. This is how we are submitting the form to create or update a show inside the __CreateUpdateShowForm.jsx__ component.

```jsx
const createShow = useCreateShow();
const updateShow = useUpdateShow();

const handleSubmit = e => {
  e.preventDefault()
  const payload = {
    title,
    storyline,
    platforms: availablePlatforms?.map(x => ({ name: x })),
    active: true
  }

  if (data?.id) {
    updateShow.mutateAsync({ data: payload, id: data?.id}, {
      onSuccess: () => {
        closeModal(modalId);
      }
    })
  } else {
    createShow.mutateAsync(payload, {
      onSuccess: () => {
        closeModal(modalId);
        setTitle('');
        setStoryline('');
        setAvailablePlatforms([])
      }
    });
  }
}
```

➡️ It’s time to run our frontend application.

```cmd
> npm run start
or
> yarn start
```

Here is the result.

![demo-of-application](images/post1/demo-of-application.webp)


### Here are the repositories. You can take a look and understand the code in greater detail.

- [Backend Repository](https://github.com/rroy11705/python-react-integration-backend)
- [Frontend Repository](https://github.com/rroy11705/python-react-integration-frontend)

## Conclusion

