
class BaseConfig(object):
    """
    Base config class
    """
    DEBUG = True
    TESTING = False


class ProductionConfig(object):
    """
    Production-specific config
    """
    DEBUG = False


class DevelopmentConfig(object):
    """
    Development-specific config
    """
    DEBUG = True
    TESTING = True