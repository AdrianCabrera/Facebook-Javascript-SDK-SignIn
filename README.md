# Facebook Javascript SDK Examples
A simple Sign In example using  Facebook Javascript SDK.

## Steps

1. Create a Facebook Developer account on [Facebook Developer](https://developers.facebook.com). 
2. Create an App on [Facebook Developer - Apps Dashboard](https://developers.facebook.com/apps/).
3. Use your App's APP_ID on the file js/script.js.

```javascript
FB.init({
    appId: 'APP_ID',
    cookie: true,
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v2.12'
});
```
4. Start your server from the root folder. For example:
```cmd
php -S localhost:80
```

5. Access the web page going to: [Localhost](http://localhost).