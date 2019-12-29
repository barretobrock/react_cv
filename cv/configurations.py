
class Config(object):
    """
    Default config
    """
    DEBUG = False
    TESTING = False
    # DATABASE_URI = 'mysql://user@localhost/foo'

class BaseConfig(Config):
    """
    Base config class
    """
    DEBUG = True
    TESTING = False


class ProductionConfig(Config):
    """
    Production-specific config
    """
    DEBUG = False


class DevelopmentConfig(Config):
    """
    Development-specific config
    """
    DEBUG = True
    TESTING = True
    TEMPLATES_AUTO_RELOAD = True
