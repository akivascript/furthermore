(ns furthermore.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [furthermore.core-test]))

(doo-tests 'furthermore.core-test)

