(defproject furthermore "0.7.1-SNAPSHOT"
  :description "A topical liveblogging platform written in Clojure/ClojureScript."
  :url "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :min-lein-version "2.6.1"

  :dependencies
  [[org.clojure/clojure "1.9.0-alpha10"]
   [org.clojure/clojurescript "1.9.93"
    :classifier "aot"
    :exclusions [org.clojure/tools.reader org.clojure/data.json]]
   [clj-time "0.12.0"]
   [clj-rss "0.2.3"]
   [cljs-ajax "0.5.8"]
   [com.andrewmcveigh/cljs-time "0.4.0"]
   [compojure "1.5.1"]
   [org.clojure/data.json "0.2.6" :classifier "aot"]
   [prismatic/dommy "1.1.0"]
   [environ "1.0.3"]
   [hiccup "1.0.5"]
   [liberator "0.14.1"]
   [medley "0.8.2"]
   [com.novemberain/monger "3.0.2"]
   [ring-basic-authentication "1.0.5"]
   [ring/ring-defaults "0.2.1"]
   [ring/ring-jetty-adapter "1.5.0"]
   [org.clojure/tools.reader "0.10.0" :classifier "aot"]
   [twitter-api "0.7.8"]
   [typographer "1.1.0"]]

  :plugins
  [[lein-cljsbuild "1.1.3"]
   [lein-environ "1.0.3"]
   [lein-figwheel "0.5.5-SNAPSHOT" :exclusions [cider/cider-nrepl]]
   [lein-ring "0.9.7"]]

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
             :source-paths ["src/cljs"]
             :compiler {:output-to "resources/public/js/compiled/furthermore.js"
                        :output-dir "resources/public/js/compiled/out"
                        :asset-path "/js/compiled/out"
                        :cache-analysis true
                        :optimizations :advanced
                        :pretty-print false}}
            {:id "dev"
             :source-paths ["src/cljs" "dev/cljs"]
             :compiler {:output-to "resources/public/js/compiled/furthermore.js"
                        :output-dir "resources/public/js/compiled/dev"
                        :asset-path "/js/compiled/dev"
                        :main furthermore.dev
                        :cache-analysis true
                        :optimizations :none
                        :recompile-dependents true
                        :source-map true
                        :source-map-timestamp true
                        :pretty-print true}}]}

  :profiles
  {:uberjar {:hooks [leiningen.cljsbuild]
             :env {:production "true"}
             :omit-source true
             :aot :all}

   :prod [:prod-config
          :twitter
          {:hooks [leiningen.cljsbuild]
           :env {:production "true"}
           :omit-source true
           :aot :all}]

   :staging [:staging-config
             :twitter
             {:hooks [leiningen.cljsbuild]
              :env {:production "true"}
              :omit-source true
              :aot :all}]

   :dev [:local-config
         :twitter
         {:env {:dev "true"}

          :source-paths ["dev/clj"]

          :dependencies
          [[leiningen "2.6.1"]
           [javax.servlet/servlet-api "2.5"]
           [ring-mock "0.1.5"]]

          :figwheel {:http-server-root "public"
                     :server-port 3449
                     :css-dirs ["resources/public/css"]
                     :server-logfile "tmp/logs/figwheel-server.log"}}]}

  :repl-options
  {:caught clj-stacktrace.repl/pst+})
