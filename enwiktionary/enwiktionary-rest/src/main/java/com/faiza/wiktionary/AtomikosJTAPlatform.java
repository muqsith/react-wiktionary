package com.faiza.wiktionary;

import javax.transaction.TransactionManager;
import javax.transaction.UserTransaction;

import org.hibernate.engine.transaction.jta.platform.internal.AbstractJtaPlatform;
import org.springframework.transaction.jta.JtaTransactionManager;
import org.springframework.util.Assert;

public class AtomikosJTAPlatform extends AbstractJtaPlatform{

	/**
	 * 
	 */
	private static final long serialVersionUID = 4670610180988876673L;
	

	
	private static JtaTransactionManager jtaTransactionManager;

	public void setJtaTransactionManager(JtaTransactionManager jtm) {
		if (jtm != null) {
			jtaTransactionManager = jtm;
		}
	}

	@Override
	protected TransactionManager locateTransactionManager() {
		TransactionManager tm = jtaTransactionManager.getTransactionManager(); 
		Assert.notNull(tm, "Transaction manager is null");
		return tm;
	}

	@Override
	protected UserTransaction locateUserTransaction() {
		UserTransaction ut = jtaTransactionManager.getUserTransaction();
		Assert.notNull(ut, "UserTransaction is null");
		return ut;
	}

}
