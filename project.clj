(defproject furthermore "0.1.0"
  :description "A topical liveblogging platform written in Clojure/ClojureScript."
  :url "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.5.0"
  :dependencies [[org.clojure/clojure "1.7.0-alpha5"]
                 [org.clojure/clojurescript "0.0-2913" :scope "provided"]
                 [clj-time "0.9.0"]
                 [compojure "1.3.2"]
                 [environ "1.0.0"]
                 [markdown-clj "0.9.63"]
                 [com.novemberain/monger "2.1.0"]
                 [om "0.8.0-rc1"]
                 [ring "1.3.2"]
                 [ring/ring-defaults "0.1.4"]
                 [selmer "0.8.0"]
                 [typographer "1.0.0"]]
  :plugins [[lein-cljsbuild "1.0.6-SNAPSHOT"]
            [lein-environ "1.0.0"]]
  :source-paths ["src/clj"]
  :ring {:handler furthermore.server/app
         :init furthermore.server/init
         :destroy furthermore.server/destroy}
  :uberjar-name "furthermore-test.jar"
  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :compiler {:output-to "resources/public/js/furthermore.js"
                                        :output-dir "resources/public/js/out"
                                        :source-map "resources/public/js/out.js.map"
                                        :preamble ["react/react.min.js"]
                                        :externs ["react/externs/react.js"]
                                        :optimizations :none
                                        :pretty-print true}}}}
  :profiles {:uberjar {:source-paths ["env/prod/clj"]
                       :hooks [leiningen.cljsbuild]
                       :env {:production true}
                       :omit-source true
                       :aot :all
                       :cljsbuild {:app {:furthermore {:source-paths ["env/prod/cljs"]
                                                       :compiler {:optimizations :advanced
                                                                  :pretty-print false}}}}}
             :dev [:private {:dependencies [[expectations "2.0.16"]
                                            [figwheel "0.2.5-SNAPSHOT"]
                                            [leiningen "2.5.1"]]
                             :plugins [[lein-figwheel "0.2.5-SNAPSHOT"]]
                             :env {:is-dev true}
                             :figwheel {:http-server-root "public"
                                        :port 3449
                                        :css-dirs ["resources/public/css"]
                                        :server-logfile "tmp/logs/figwheel-server.log"}
                             :source-paths ["env/dev/clj"]
                             :repl-options {:init-ns furthermore.server
                                            :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                             :cljsbuild {:builds {:app {:source-paths ["env/dev/cljs"]}}}}]})
