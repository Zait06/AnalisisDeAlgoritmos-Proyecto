#ifndef BASEFITNESSFN_H_
#define BASEFITNESSFN_H_

#include <Eigen/Dense>

#define VectorType Eigen::VectorXf

class BaseFitnessFn {
   public:
    BaseFitnessFn();
    virtual float compute(VectorType) const;
};

#endif