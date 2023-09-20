#ifndef PARTICLE_H_
#define PARTICLE_H_

#include <Eigen/Dense>
#include <iostream>
#include "../FitnessFunction/BaseFitnessFn.h"

#define VectorType Eigen::VectorXf

typedef struct LimitValues {
    float min;
    float max;
} LimitValues;

class Particle {
   private:
    float m_minVal;
    float m_maxVal;
    float m_bestScore;
    VectorType m_position;
    VectorType m_velocity;
    VectorType m_bestPosition;

    BaseFitnessFn *m_fitnessFn;

   public:
    Particle();
    Particle(int dim, LimitValues pos, LimitValues vel, BaseFitnessFn *fitFn);
    ~Particle();

    VectorType getVelocity();
    VectorType getPosition();

    float getBestScore() const;
    void setBestScore(float bestScore);

    VectorType getBestPosition();
    void setBestPosition(VectorType bestPosition);

    float score() const;
    void move();
    void computeVelocity(float alpha, float betha, VectorType bestGlobPos);

    bool operator>(const Particle &par);
    bool operator<(const Particle &par);
    bool operator==(const Particle &par);
};

#endif
