(defproject furthermore "0.7.5-SNAPSHOT"
  :description "A topical liveblogging platform written in Clojure/ClojureScript."
  :url "https://github.com/akivaschoen/furthermore"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.93" :scope "provided"]

                 [org.webjars/bootstrap "4.0.0-alpha.2"]
                 [bouncer "1.0.0"]
                 [buddy/buddy-auth "1.1.0"]
                 [clj-time "0.12.0"]
                 [cljs-ajax "0.5.8"]
                 [compojure "1.5.1"]
                 [cprop "0.1.8"]
                 [prismatic/dommy "1.1.0"]
                 [org.webjars/font-awesome "4.6.3"]
                 [hiccup "1.0.5"]
                 [luminus-immutant "0.2.2"]
                 [luminus-nrepl "0.1.4" :exclusions [cider/cider-nrepl
                                                     refactor-nrepl]]
                 [markdown-clj "0.9.89"]
                 [com.novemberain/monger "3.0.2"]
                 [mount "0.1.10"]
                 [reagent-utils "0.2.0"]
                 [reagent "0.6.0-rc"]
                 [ring/ring-defaults "0.2.1"]
                 [metosin/ring-http-response "0.8.0"]
                 [ring-middleware-format "0.7.0"]
                 [ring-webjars "0.1.1"]
                 [secretary "1.2.3"]
                 [selmer "1.0.7"]
                 [org.webjars.bower/tether "1.3.3"]
                 [org.clojure/tools.cli "0.3.5"]
                 [org.clojure/tools.logging "0.3.1"]
                 [twitter-api "0.7.8"]
                 [typographer "1.1.1"]
                 [org.webjars/webjars-locator-jboss-vfs "0.1.0"]]

  :plugins [[lein-auto "0.1.2"]
            [lein-cljsbuild "1.1.3"]
            [lein-cprop "1.0.1"]
            [lein-immutant "2.1.0"]
            [lein-sassc "0.10.4"]]

  :min-lein-version "2.0.0"

  :jvm-opts ["-server" "-Dconf=.lein-env"]

  :source-paths ["src/clj" "src/cljc"]
  :resource-paths ["resources" "target/cljsbuild"]
  :target-path "target/%s/"

  :main furthermore.core

  :sassc
  [{:src "resources/scss/screen.scss"
    :output-to "resources/public/css/screen.css"
    :style "nested"
    :import-path "resources/scss"}]

  :auto
  ["sassc" {:file-pattern #"\.(scss|sass)$"
            :paths ["resources/scss"]}]

  :hooks [leiningen.sassc]

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :figwheel
  {:http-server-root "public"
   :nrepl-port 7002
   :css-dirs ["resources/public/css"]
   :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :profiles
  {:uberjar {:omit-source true
             :prep-tasks ["compile" ["cljsbuild" "once" "min"]]
             :cljsbuild
             {:builds
              {:min
               {:source-paths ["src/cljc" "src/cljs" "env/prod/cljs"]
                :compiler
                {:output-to "target/cljsbuild/public/js/furthermore.js"
                 :externs ["react/externs/react.js"]
                 :optimizations :advanced
                 :pretty-print false
                 :closure-warnings
                 {:externs-validation :off :non-standard-jsdoc :off}}}}}

             :aot :all
             :uberjar-name "furthermore.jar"
             :source-paths ["env/prod/clj"]
             :resource-paths ["env/prod/resources"]}

   :dev           [:project/dev :profiles/dev]
   :test          [:project/test :profiles/test]

   :project/dev  {:dependencies [[binaryage/devtools "0.8.0"]
                                 [doo "0.1.7"]
                                 [figwheel-sidecar "0.5.4-7"]
                                 [pjstadig/humane-test-output "0.8.0"]
                                 [com.cemerick/piggieback "0.2.2-SNAPSHOT"]
                                 [prone "1.1.1"]
                                 [ring/ring-devel "1.5.0"]
                                 [ring/ring-mock "0.3.0"]]
                  :plugins      [[org.clojure/clojurescript "1.9.93"]
                                 [lein-doo "0.1.7"]
                                 [lein-figwheel "0.5.4-7"]
                                 [com.jakemccrary/lein-test-refresh "0.14.0"]]

                  :cljsbuild
                  {:builds
                   {:app
                    {:source-paths ["src/cljs" "src/cljc" "env/dev/cljs"]
                     :compiler
                     {:main "furthermore.app"
                      :asset-path "/js/out"
                      :output-to "resources/public/js/furthermore.js"
                      :output-dir "resources/public/js/out"
                      :source-map true
                      :optimizations :none
                      :pretty-print true}}}}

                  :doo {:build "test"}
                  :source-paths ["env/dev/clj" "test/clj"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}

   :project/test {:resource-paths ["env/dev/resources" "env/test/resources"]
                  :cljsbuild
                  {:builds
                   {:test
                    {:source-paths ["src/cljc" "src/cljs" "test/cljs"]
                     :compiler
                     {:output-to "target/test.js"
                      :main "furthermore.doo-runner"
                      :optimizations :whitespace
                      :pretty-print true}}}}}

   :profiles/dev {}
   :profiles/test {}})
