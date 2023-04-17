In this project i have mainly created a Social media site:SocioCraz which follows the following step:
1.First at http://localhost:3000 the user is navigated to a register page where he can enter his name,occupation,location,even add his image,set his mail and password 
Once he clicks on the Register button,he is taken to a login page where if the mail id and password matches he is taken to a home page
2.In the home page he can: view other's posts,like them,view only the comments and add them as friends which then is displayed
on his friend's list
3.On clicking a user's profile name or picture he is taken to the user's profile where he can see his other friends,followers on linked and twitter and his other credentials
4.Also user can set light/dark mode as per his choice any time during the process
5.Also finally there is an option for user to log out of the app by clicking on the formhandle component on the extreme top right corner
6.Even there is a option for users to post themselves and add a description
7.This app is fully responsive on screen-width less than 1000px ,which we have done using ternary operator and using grid and flexbox components as required.
8.For authorization/validation we have used formik and yup and jwt for client side authentication
9.The server runs at 3001 port and client at 3000 

For process of login/register one may consider seeing:
scenes/loginPage/form.jsx and index.jsx and auth.js routes and controller in backend and auth.js middleware
For process of friend add/removal one may consider:
scenes/widgets/FriendListWidget.jsx and scenes/components/Friend.jsx
For user info:
see scenes/widget/UserWidget
For process of posts and like related queries:
MypostWidget PostWidget and PostsWidget and see routes and controllers of posts.js

Features thought of adding in future:
1.popping out of user image whenever user clicks on it
2.Giving permissions to users of commenting on a post
3.Enabling chatrooms using socket.io in the app
