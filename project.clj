(defproject furthermore "0.1.0"
  :description
  "A topical liveblogging platform written in Clojure/ClojureScript."
  :url
  "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.0"

  :dependencies
  [[org.clojure/clojure "1.7.0-alpha5"]
   [org.clojure/clojurescript "0.0-2913" :scope "provided"]
   [clj-time "0.9.0"]
   [cljs-ajax "0.3.10"]
   [com.andrewmcveigh/cljs-time "0.3.2"]
   [compojure "1.3.2"]
   [environ "1.0.0"]
   [markdown-clj "0.9.63"]
   [com.novemberain/monger "2.1.0"]
   [org.omcljs/om "0.8.8"]
   [prismatic/om-tools "0.3.10"]
   [ring/ring-defaults "0.1.4"]
   [secretary "1.2.1"]
   [typographer "1.1.0"]]

  :plugins
  [[lein-cljsbuild "1.0.6-SNAPSHOT"]
   [lein-environ "1.0.0"]
   [lein-ring "0.8.13"]]

  :source-paths
  ["src/clj"]

  :resource-paths
  ["resources"]

  :uberjar-name
  "furthermore-test.jar"

  :main furthermore.core

  :ring {:handler furthermore.server/app}

  :cljsbuild
  {:builds {:app {:source-paths ["src/cljs"]
                  :compiler {:output-to "resources/public/js/furthermore.js"
                             :output-dir "resources/public/js/out"
                             :asset-path "/js/out"
                             :main furthermore.dev
                             :source-map true
                             :source-map-timestamp true
                             :cache-analysis true
                             :optimizations :none
                             :pretty-print true}}}}

  :profiles
  {:uberjar {:source-paths ["env/prod/clj"]
             :hooks [leiningen.cljsbuild]
             :env {:production true}
             :omit-source true
             :aot :all
             :cljsbuild {:app {:furthermore
                               {:source-paths ["env/prod/cljs"]
                                :compiler {:optimizations :advanced
                                           :pretty-print false}}}}}

   :dev [:private
         {:dependencies
          [[expectations "2.0.16"]
           [figwheel "0.2.5-SNAPSHOT"]
           [leiningen "2.5.1"]
           [javax.servlet/servlet-api "2.5"]
           [ring-mock "0.1.5"]]
          :plugins [[lein-figwheel "0.2.5-SNAPSHOT"]]
          :env {:is-dev true}
          :figwheel {:http-server-root "public"
                     :port 3449
                     :css-dirs ["resources/public/css"]
                     :server-logfile "tmp/logs/figwheel-server.log"}
          :source-paths ["env/dev/clj"]
          :repl-options {:init-ns furthermore.server}
          :cljsbuild {:builds {:app
                               {:source-paths ["env/dev/cljs"]}}}}]})
