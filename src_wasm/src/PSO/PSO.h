#ifndef PSO_H_
#define PSO_H_

#include <vector>
#include "../Particle/Particle.h"

class PSO {
   private:
    int m_size;
    float m_minVal;
    float m_maxVal;
    float m_localFactor;
    float m_globalFactor;
    Particle* m_population;
    float m_bestGlobalScore;
    Particle m_bestGlobalParticle;

   public:
    PSO(int size, float min, float max, int dim);
    ~PSO();

    void setLocalFactor(float factor);
    float getLocalFactor();

    void setGlobalFactor(float factor);
    float getGlobalFactor();

    Particle getBestGlobalParticle() const;

    void train(int generations);
};

#endif