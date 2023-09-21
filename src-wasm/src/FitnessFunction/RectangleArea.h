#ifndef RECTANGLEAREA_H_
#define RECTANGLEAREA_H_

#include "BaseFitnessFn.h"

class RectangleArea : public BaseFitnessFn {
   public:
    RectangleArea();
    float compute(VectorType x) const override;
};

#endif
