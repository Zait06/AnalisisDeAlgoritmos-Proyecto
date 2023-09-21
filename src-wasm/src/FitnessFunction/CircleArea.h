#ifndef CIRCLEAREA_H_
#define CIRCLEAREA_H_

#include "BaseFitnessFn.h"

class CircleArea : public BaseFitnessFn {
   public:
    CircleArea();
    float compute(VectorType x) const override;
};

#endif
