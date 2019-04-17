<?php

class Dice {
    private  $faces, $bias = null;
    private  $freqs = array();
    
    // Constructor
    public function __construct($faces, $bias) {
        $this->faces = $faces;
        if($bias !== null) {
            $this->bias = $bias;
        }
    }
    
    public function cast() {
        if ($this->bias !== null) {
            $random = rand(1, 100);
            if ($random <= $this->bias*100) {
                return $this->faces;
            } else {
                return rand(1, $this->faces-1);
            }
        } else {
            $res = rand(1,$this->faces);
            $this->freqs[$res]++;
            return $res;
        }
    }
    
    public function getFreq($eyes) {
        $freq = $this->freqs[$eyes];
        if ($freq=="")
            $freq = 0;
        return $freq;
    }

    public function average() {
        $total = 0;
        $amount = 0;
        for ($i=1; $i<=$this->faces; $i++) {
            if ($this->freq[$i]=="") {
                $total += $i * 0;
                $amount += 0;
            } else {
                $total += $i * $this->freqs[$i];
                $amount += $this->freqs[i];
            }
        }
        return $total / $amount;
    }
}

class PhysicalDice extends Dice {
    private $material;

    function __construct($faces, $material, $bias) {
        parent::__construct($faces, $bias);
        $this->material = $material;
    }
}

?>