(defproject furthermore "0.6.5-SNAPSHOT"
  :description "A topical liveblogging platform written in Clojure/ClojureScript."
  :url "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.5.0"

  :dependencies
  [[org.clojure/clojure "1.7.0-RC2"]
   [org.clojure/clojurescript "0.0-3308"
    :classifier "aot"
    :exclusions [org.clojure/tools.reader org.clojure/data.json]]
   [clj-time "0.9.0"]
   [clj-rss "0.1.9"]
   [cljs-ajax "0.3.12"]
   [com.andrewmcveigh/cljs-time "0.3.5"]
   [compojure "1.3.4"]
   [org.clojure/data.json "0.2.6" :classifier "aot"]
   [prismatic/dommy "1.1.0"]
   [environ "1.0.0"]
   [hiccup "1.0.5"]
   [liberator "0.13"]
   [markdown-clj "0.9.66"]
   [medley "0.6.0"]
   [com.novemberain/monger "2.1.0"]
   [ring-basic-authentication "1.0.5"]
   [ring/ring-defaults "0.1.5"]
   [ring/ring-jetty-adapter "1.3.2"]
   [org.clojure/tools.reader "0.9.2" :classifier "aot"]
   [twitter-api "0.7.8"]
   [typographer "1.1.0"]]

  :plugins
  [[lein-autoexpect "1.4.2"]
   [lein-cljsbuild "1.0.6"]
   [lein-environ "1.0.0"]
   [lein-figwheel "0.3.3" :exclusions [cider/cider-nrepl]]
   [lein-ring "0.9.3"]]

  :source-paths
  ["src/clj"]

  :resource-paths
  ["resources"]

  :main furthermore.server

  :ring {:handler furthermore.server/app}

  :target-path "target/%s"

  :clean-targets ^{:protect false} ["resources/public/js/compiled"]

  :cljsbuild
  {:builds [{:id "main"
             :source-paths ["src/cljs" "env/prod/cljs"]
             :compiler {:output-to "resources/public/js/compiled/furthermore.js"
                        :output-dir "resources/public/js/compiled/out"
                        :asset-path "/js/compiled/out"
                        :cache-analysis true
                        :optimizations :advanced
                        :pretty-print false}}
            {:id "dev"
             :source-paths ["src/cljs" "env/dev/cljs"]
             :compiler {:output-to "resources/public/js/compiled/furthermore.js"
                        :output-dir "resources/public/js/compiled/dev"
                        :asset-path "/js/compiled/dev"
                        :main furthermore.dev
                        :cache-analysis true
                        :optimizations :none
                        :source-map true
                        :source-map-timestamp true
                        :pretty-print true}}]}

  :profiles
  {:uberjar {:hooks [leiningen.cljsbuild]
              :env {:production true}
              :omit-source true
              :aot :all}

   :prod [:prod-config
          :twitter
          {:hooks [leiningen.cljsbuild]
           :env {:production true}
           :omit-source true
           :aot :all}]

   :staging [:staging-config
             :twitter
             {:hooks [leiningen.cljsbuild]
              :env {:production true}
              :omit-source true
              :aot :all}]

   :dev [:local-config
         :twitter
         {:source-paths ["env/dev/clj"]

          :dependencies
          [[expectations "2.0.16"]
           [leiningen "2.5.1"]
           [javax.servlet/servlet-api "2.5"]
           [midje "2.0.0-SNAPSHOT"]
           [ring-mock "0.1.5"]]

          :env {:dev true}

          :figwheel {:http-server-root "public"
                     :server-port 3449
                     ;:nrepl-port 7003
                     ;:ring-handler furthermore.server/app
                     :css-dirs ["resources/public/css"]
                     :server-logfile "tmp/logs/figwheel-server.log"}

          :repl-options {:init-ns furthermore.dev}
          :jvm-opts ^:replace ["-XX:-OmitStackTraceInFastThrow"]}]})
