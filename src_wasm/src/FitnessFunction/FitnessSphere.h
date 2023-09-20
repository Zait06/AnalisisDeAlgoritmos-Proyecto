#ifndef FITNESSSHPERE_H_
#define FITNESSSHPERE_H_

#include "BaseFitnessFn.h"

class FitnessSphere : public BaseFitnessFn {
   public:
    FitnessSphere();
    float compute(VectorType x) const override;
};

#endif
