

            var app = Ned();

            app.config({
                customAttributeNavigate:"ndhref",
                defualtRoot:'/'
            });

      
            app.router.add('/',{
                name:"Index Page",
                html:  "./pages/home/home.route.page.html",
                style: "./pages/home/home.route.style.css",
                script:"./pages/home/home.route.script.js",
                controller: function(){ /*console.log("/home router loaded")*/ }
            });

            app.router.add('/about',{
                name: "About Page",
                html:  "./pages/about/about.route.page.html",
                style: "./pages/about/about.route.style.css",
                script:"./pages/about/about.route.script.js",
                controller: function(){ /*console.log("/about router loaded")*/ }
            });

            


            app.component.add('component-header',{   
                
                html:  "./components/header/header.component.page.html",
                style: "./components/header/header.component.style.css",  
                script:"./components/header/header.component.script.js",
                controller: function(){ /*console.log("<component-header></component-header> component loaded")*/ }  
            });


           app.init();
